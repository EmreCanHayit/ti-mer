import Header from './components/header';
import Catalog from './components/Catalog';

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
      />
      <Catalog choise = { 'limbra' } />
    </div>
  )
}

export default WithTransition(Home);