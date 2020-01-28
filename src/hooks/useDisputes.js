import { useMemo } from 'react'
import useNow from './useNow'
import useDisputeSubscription from './useDisputesSubscription'
import { getPhaseAndTransition } from '../utils/dispute-utils'
import { useCourtConfig } from '../providers/CourtConfig'
import { convertToString } from '../types/types'

export default function useDisputes() {
  const courtConfig = useCourtConfig()
  const disputes = useDisputeSubscription()
  const now = useNow()

  const disputesPhases = useMemo(
    () => disputes.map(d => getPhaseAndTransition(d, courtConfig, now)),
    [courtConfig, disputes, now]
  )
  const disputesPhasesKey = disputesPhases
    .map(v => convertToString(Object.values(v)[0]))
    .join('')

  return [
    useMemo(() => {
      return disputes.map((dispute, i) => ({
        ...dispute,
        ...disputesPhases[i],
      }))
    }, [disputesPhases, disputes, disputesPhasesKey]), // eslint-disable-line react-hooks/exhaustive-deps
  ]
}