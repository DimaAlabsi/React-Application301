import React, { Component } from 'react';
import Data from '../assests/data.json';
import HornedBeast from './HornedBeast';
// import SelectedBeast from './SelectedBeast';
// import  FormFilter from   './components/SelectedBeast';


 class Main extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//            likes: 0
//         };
//     }
//     numOfFav = ()=>{
//     this.setState({
//         likes : this.state.likes + 1
//     })
// }
    render() {
        
        return (
            
                  <div className="row">

        {
            
       Data.map(item=>{
           return<HornedBeast title ={item.title} image_url={item.image_url} description={item.description} alt={item.keyword} horns={item.horns} handleOpen= {this.props.handleOpen}
        //    form
        // selectForm={this.props.selectForm}
           
           />;

        //    return <button onClick={this.NumOfFav}> Likes </button>;
        //    return     <HornedBeast likes={this.state.likes}/> ;

        }
         )
       }

            </div>
            
        )
    }
}

export default Main
// [{
//     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//     "title": "UniWhal",
//     "description": "A unicorn and a narwhal nuzzling their horns",
//     "keyword": "narwhal",
//     "horns": 1
//   },

//   {
//     "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
//     "title": "Rhino Family",
//     "description": "Mother (or father) rhino with two babies",
//     "keyword": "rhino",
//     "horns": 2
//   },
  
//   {
//     "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
//     "title": "Unicorn Head",
//     "description": "Someone wearing a creepy unicorn head mask",
//     "keyword": "unicorn", 
//     "horns": 1
// }]