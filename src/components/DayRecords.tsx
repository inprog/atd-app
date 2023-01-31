import { Box, Text } from "@chakra-ui/react";
import { attendanceMap } from "../constants/index";

type Props = {
    day: string
    daydata?: {
      attendance?:  {
        start_time?: string;
        end_time?: string;
      }[],
      rest?:  {
        start_rest?: string;
        end_rest?: string;
      }[]
    }
}



const DayRecords = ({day, daydata}:Props) => {
  const attendanceData = daydata?.attendance
  const restData = daydata?.rest

  const alldaydata = []
  for(var i=0; i<(attendanceData?.length ?? 0); i++){
    alldaydata.push(Object.entries(attendanceData?.[i] ?? ""))
  }
  for(var i=0; i<(restData?.length ?? 0); i++){
    alldaydata.push(Object.entries(restData?.[i] ?? ""))
  }

  const alldaydata_array = []
  for(var i=0; i<alldaydata?.length; i++){
    for(var j=0; j<2; j++){
      alldaydata_array.push(alldaydata[i]?.[j])
    }
  }

  const filteredAllData = alldaydata_array.filter(data => data[1] !== null).sort((a, b) => Number(a) - Number(b));

  return (
      <Box w="100%" p={2}>
      <Text fontSize="xl">{`${day}`}</Text>
      {filteredAllData?.map(
        (data, i) => {
          if(data?.[1].match(day)){
            return(
              <Box key={i}>
                <Text p={1}>{attendanceMap.get(data?.[0])} : {data[1]}</Text>
              </Box>
            )
          }
        }
      )}
      </Box>
    )
}

export default DayRecords