import Header from './components/header';
import Container from './components/Container';

import WithTransition from './HOC/WithTransition';

const Home = () => {
  return (
    <div>
      <Header 
        title={"title"} 
        mainpage={"navigation.mainpage"} 
        gallery={"navigation.gallery"} 
        contact={"navigation.contact"}
        logo={true}
        mining={"mining"} 
        energy={"energy"}
      />
      <Container padding={true} />
    </div>
  )
}

export default WithTransition(Home);