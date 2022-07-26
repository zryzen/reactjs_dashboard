import React from 'react';
import './App.css';


function App() {

  return (
    <div className='dashboard'>
      <table style={{height:'10vh',width:'100%'}}>

        <tr style={{backgroundColor:'orange'}}>
          <td><table><tr>
            <td><a style={{color:"white"}} href="">=</a></td>
            <td><a href="" style={{color:"white"}}>WIDGETS</a></td>
            <td><a href="" style={{color:"white"}}>WIDGETS</a></td>
            <td style={{width:'100%',textAlign:'center'}}><a href="" style={{color:"white"}}>LOGO</a></td>
            <td><a href="" style={{color:"white"}}>SEARCH</a></td>
            <td><a href="" style={{color:"white"}}>PROFILE</a></td>
            <td><a href="" style={{color:"white"}}>BOOKMARKS</a></td>
          </tr></table></td>
        </tr>

        <tr style={{color:"white", height:'45vh'}}>
          <td style={{backgroundColor:'red'}}>
            <table style={{height:'45vh',width:'100%'}}><tr>
            <td style={{backgroundColor:'red'}}>sdsa</td>
            <td style={{backgroundColor:'blue'}}>sdsa</td>
          </tr></table></td>
        </tr>

        <tr style={{backgroundColor:'white',color:"black",width:'100vw', height:'45vh'}}>
          <td style={{columnSpan:'100%'}}>333</td>
        </tr>


      </table>
    </div>
  );
}

export default App;