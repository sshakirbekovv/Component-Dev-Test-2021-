import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './app/components/header/Header';
import MenuContentItems from './app/components/main/mainItems/MainContentItems';
import { fetchCategories } from './app/redux/categories/categories.actions';
import { selectCategories } from './app/redux/categories/categories.selectors';


const App:React.FC = () => {

  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  useEffect(() => { 
      dispatch(fetchCategories());
  }, []);

  return (
      <div className = "App">
          <Header />
          <Switch>
             { categories && categories.pages.map((category) => (
              category.blocks.map(contentItem =>  
             <Route 
             key={category.slug}
             path={`/${category.slug}`}  
             render={() => <MenuContentItems contentItem={contentItem}/>}/>
             )))
             }
         </Switch>
      </div>
  );
}

export default App;
