import React, { useState } from "react";
import { Box, Button, VStack, HStack, Text, Input, useToast } from "@chakra-ui/react";
import { FaPlay, FaStop, FaPlus } from "react-icons/fa";

const Index = () => {
  const [processes, setProcesses] = useState([]);
  const [processName, setProcessName] = useState("");
  const [processPriority, setProcessPriority] = useState("");
  const toast = useToast();

  const addProcess = () => {
    if (processName === "" || processPriority === "") {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setProcesses([...processes, { name: processName, priority: parseInt(processPriority), state: "Ready" }]);
    setProcessName("");
    setProcessPriority("");
  };

  const runScheduler = () => {
    const sortedProcesses = [...processes].sort((a, b) => a.priority - b.priority);
    setProcesses(
      sortedProcesses.map((process, index) => ({
        ...process,
        state: index === 0 ? "Running" : "Ready",
      })),
    );
  };

  const stopScheduler = () => {
    setProcesses(
      processes.map((process) => ({
        ...process,
        state: "Ready",
      })),
    );
  };

  return (
    <VStack spacing={4}>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="xl">Process Scheduler Simulator</Text>
      </Box>
      <HStack>
        <Input placeholder="Process Name" value={processName} onChange={(e) => setProcessName(e.target.value)} />
        <Input placeholder="Priority (lower is higher)" type="number" value={processPriority} onChange={(e) => setProcessPriority(e.target.value)} />
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={addProcess}>
          Add Process
        </Button>
      </HStack>
      <HStack>
        <Button leftIcon={<FaPlay />} colorScheme="green" onClick={runScheduler}>
          Run
        </Button>
        <Button leftIcon={<FaStop />} colorScheme="red" onClick={stopScheduler}>
          Stop
        </Button>
      </HStack>
      <VStack spacing={2}>
        {processes.map((process, index) => (
          <Text key={index}>
            {process.name} - Priority: {process.priority} - State: {process.state}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
};

export default Index;
