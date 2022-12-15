import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/action'
import { Box , Button, Flex, Image, Input, Select, Text} from '@chakra-ui/react'

export const Home = () => {

  const data = useSelector((store)=> store.data)
  let dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [filter, setFilter] =  useState('')
  const [page, setPage] = useState(1)

  const handleReset=()=>{
    // dispatch(getData(page,filter))
    setFilter('')
    setPage(1)
  }
  useEffect(()=>{
    dispatch(getData(page,filter))
  },[page,filter])
  console.log(data)

  return (
    <Box>
      <Box display={"flex"} marginBottom={100} flexDirection={{sm:"column",md:"column",lg:"row"}} justifyContent={{sm:"center",md:"center",lg:"space-Between"}}  gap={10} marginTop={10}> 
        <Box padding={{sm:"20px 80px", md:"30px 80px",lg:"50px 150px"}}>
          <Text fontSize={40} fontWeight={600}>Hello Future...</Text>
          <Text fontSize={25}>It's about believing in the future and thinking that the future will be better than the past.</Text>
        </Box>
        <Image src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/05/spacex-1590902031.jpg" margin="auto" w={{sm:"200px", md:"300px", lg:"550px"}} h={{sm:"170px", md:"250px", lg:"300px"}} paddingRight={{sm:"none", md:"none", lg:"115px"}} />
      </Box>
      <Box fontSize={35}>Capsules Filters</Box>

      <Box marginLeft={20} marginTop={35} gap={30} justifyItems={{sm:"center",md:"space-evenly", lg:"space-evenly"}}
       display={"grid"}
       gridTemplateColumns= {{
        sm:"repeat(1, 1fr)",
        md:"repeat(2, 1fr)",
        lg:"repeat(4, 1fr)"
      }}
       >
            {/* <Flex gap={30} justifyContent={'space-evenly'}> */}
              
              <Button colorScheme='teal' variant='outline' onClick={handleReset}
              w={150}
              >Reset</Button>
                <Select w="230px" placeholder='Filter By Status' onChange={(e)=>setFilter(e.target.value)}>
                    <option value="retired">Retired</option>
                    <option value="unknown">Unknown</option>
                    <option value="active">Active</option>
                </Select>
                <Input w="250px" placeholder='Search Capsule...' onChange={(e)=> setSearch(e.target.value)}/>

                <Flex gap={5} alignItems="center">
                  <Button onClick={()=>setPage( (prev)=> prev - 1)} disabled={page==1} colorScheme='red'>Prev</Button>
                  <Text fontSize={20} fontWeight={600}>{page}</Text>
                  <Button onClick={()=>setPage( prev=> prev + 1)} disabled={page==2} colorScheme='red'>Next</Button>
                {/* </Flex> */}
            </Flex>
       </Box>     

      <Box display="grid" 
      gridTemplateColumns= {{
        sm:"repeat(1, 1fr)",
        md:"repeat(2, 1fr)",
        lg:"repeat(4, 1fr)"
      }}
      gap={5} justifyItems="center" marginTop={50} marginBottom={50}>
        {
          data?.map((el)=>(
            <Box border="1px solid black" width="300px" textAlign="left" paddingLeft="10px" key={el.capsule_serial}>
              <img src="https://media.wired.com/photos/5ebb0bf26c0df3393bc20f34/191:100/w_2291,h_1199,c_limit/Science_spacex_1016265224.jpg" w="300px" />
              <h4>Capusal id- {el.capsule_id}</h4>
              <h4>Capsule Serial- {el.capsule_serial}</h4>
              <h4>Original lunch- {el.original_launch}</h4>
              <h4>Status- {el.status}</h4>
            </Box>
          ))
        }
      </Box>
      
      
    </Box>
  )
}
