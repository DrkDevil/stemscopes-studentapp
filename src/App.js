/* eslint-disable jsx-a11y/anchor-is-valid */
import Content from './components/mock data/Content'
import Navbar  from './components/core/navbar/Navbar'
import Subnav  from './components/core/subnav/Subnav'
import PageNavigation  from './components/core/page navigation/PageNavigation'
import './assets/scss/app.scss';

function App() {
  return (
    <>
    <Navbar />
    <div className='pageArea'>
      <div className='contentArea flex-grid'> 
        
        <div className='right col'> 
        <div className='card'>
            User Information
            <div className='userActions'>
            <i class="fal fa-clock"></i>  
            </div>
          </div>
          <div className='card'>
           Suggested Recoruces
           <div class="aspect-ratio">
             <iframe src="https://www.youtube.com/embed/PtLz0ZSKmBM" frameborder="0" width="550" height="275" frameborder="0" allowfullscreen></iframe>
            </div>      
          </div>
          <div className='card'>
            My Resources Folder
          </div>
          <div className='card'>
            My Bookmarks
          </div>
        </div>
        <div className='left col'> 
          <div className='flex-grid'>
            <div className='col content'>
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>       
    </>
  );
}

export default App;