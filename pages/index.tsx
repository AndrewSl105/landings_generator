import { Box } from '@mui/material';
import Block from '../layouts/Block';
import Header from '../components/Header';
import MainContainer from '../layouts/MainContainer/MainContainer';

const blocks = [
  {
    title: 'Who we are?',
    type: 'banner',
    position: '1',
    id: 1,
    backdround: 'https://minimals.cc/assets/images/about/hero.jpg',
  },
  {
    title: 'Who we are?',
    type: 'banner',
    position: '1',
    id: 2,
    backdround: 'https://minimals.cc/assets/images/about/hero.jpg',
  },
];

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <Box
        width="100%"
        display="flex"
        justify-content="center"
        flexDirection="column"
        alignItems="center"
      >
        {blocks.map( el => {
          return <Block {...el} key={el.id} />
        })}
      </Box>
    </MainContainer>
  )
}
