import { Box } from '@mui/material';
import Block from '../components/Block';
import styles from '../styles/Home.module.css'

const blocks = [
  {
    title: 'example1',
    type: 'banner',
    position: '1',
    id: 1,
    backdround: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    title: 'example2',
    type: 'banner',
    position: '1',
    id: 2,
    backdround: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
];

export default function Home() {
  return (
    <Box
      margin="0 auto"
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <Box width="100%">
        {blocks.map( el => {
          return <Block {...el} key={el.id} />
        })}
      </Box>
    </Box>
  )
}
