/* eslint-disable prettier/prettier */
import React from 'react'
// import { GU, textStyle } from '@aragon/ui'
// import { Box, GU, textStyle, useTheme } from '@aragon/ui'
// import useCourtStats from '../../hooks/useCourtStats'
// import {
//   useANJBalanceToUsd,
//   useTokenBalanceToUsd,
// } from '../../hooks/useTokenBalanceToUsd'
// import Loading from './Loading'
// import SplitAmount from '../SplitAmount'

function CourtStats() {
  // const theme = useTheme()
  // const [stats, fetching] = useCourtStats()

  return (
    <div>
      {null}
    </div>
    // <Box heading="Court Metrics" padding={3 * GU}>
    //   {(() => {
    //     if (fetching) {
    //       return <Loading height={86} />
    //     }
    //     return stats.map((stat, index) => {
    //       return (
    //         <div
    //           key={index}
    //           css={`
    //             margin-bottom: ${2 * GU}px;
    //             &:last-child {
    //               margin-bottom: 0;
    //             }
    //           `}
    //         >
    //           <span
    //             css={`
    //               ${textStyle('body2')}
    //               color: ${theme.surfaceContentSecondary};
    //               display: block;
    //               margin-bottom: ${1 * GU}px;
    //             `}
    //           >
    //             {/* {stat.label} */}
    //           </span>
    //           {stat.token ? (
    //             <TokenStats stat={stat} theme={theme} />
    //           ) : (
    //               <span
    //                 css={`
    //                 ${textStyle('title2')};
    //                 font-weight: 300;
    //               `}
    //               >
    //                 {/* {!stat.error ? stat.value : '-'} */}
    //               </span>
    //             )}
    //         </div>
    //       )
    //     })
    //   })()}
    // </Box>
  )
}

// function TokenStats({ stat, theme }) {
//   const { value, token, error } = stat
//   // const { decimals, icon, symbol } = token
//   const { decimals, symbol } = token
//   return (
//     <>
//       <div
//         css={`
//           margin-bottom: ${1 * GU}px;
//         `}
//       >
//         <span
//           css={`
//             ${textStyle('title2')};
//             font-weight: 300;
//           `}
//         >
//           {!error ? (
//             <SplitAmount amount={formatUnits(value, { digits: decimals })} />
//           ) : (
//               '-'
//             )}
//         </span>
//         {!error && (
//           <div
//             css={`
//               display: inline-flex;
//             `}
//           >
//             {/* <img
//               css={`
//                 margin-right: ${0.5 * GU}px;
//               `}
//               height="20"
//               width="18"
//               src={icon}
//             /> */}
//           </div>
//         )}
//       </div>
//       <span
//         css={`
//           ${textStyle('body2')};
//           color: ${theme.positive};
//         `}
//       >
//         $
//         {!error
//           ? symbol === 'ANJ'
//             ? AnjUsdValue(value)
//             : TokenUsdValue(token, value)
//           : '-'}
//       </span>
//     </>
//   )
// }

// function AnjUsdValue(amount) {
//   const usdValue = useANJBalanceToUsd(amount)
//   return usdValue
// }

// function TokenUsdValue(token, amount) {
//   const { decimals, symbol } = token
//   const usdValue = useTokenBalanceToUsd(symbol, decimals, amount)
//   return usdValue
// }

export default CourtStats
