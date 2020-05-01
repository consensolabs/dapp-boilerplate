pragma solidity >=0.5.0<= 0.7.0;


contract TodoList {

  string public owner;

  uint public taskCounter = 0;

  struct Task {
    uint index;
    string content;
    bool completed;
    uint timestamp;
  }

  mapping(uint=>Task) public tasks;


  constructor(string memory _owner) public {

    owner = _owner;
  }


  function createTask(string memory _content) public {

    taskCounter ++;
    Task memory task = Task(taskCounter, _content, false, block.timestamp);

    tasks[taskCounter] = task;

  }

  function toggleTask(uint _index) public {

    tasks[_index].completed = ! tasks[_index].completed;

  }



}

