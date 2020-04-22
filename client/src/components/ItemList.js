import React, { useEffect , Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "../App.css"
import axios from 'axios'
import ItemForm from './Form/ItemForm'
import {getItems} from '../action/item'

  
const Items = ({ getItems,item:{items,loading}})=>{
    useEffect(()=>{
        getItems();
    },[getItems]);

    return (
        <Fragment>
           <ItemForm/>  
          <h1>List of Items </h1>
            <div id = "content" style= {{float:"left", width:"75%",width:"1179px",padding:"0px" ,margin:"0"}}> 
            {/* <div  style= {{float:"left", width:"75%"}}> */}
            
              <div className ='container-fluid ' style={{padding:"0px",float:"left", margin:"0px"}}>
              {/* <div> */}
               
               {/* <main className ="App"> */}
               <table style={{widith:"1000px"}}>
                 <tr>
                   <th>NAME</th>
                   <th>
                     Unique
                     id
                   </th>
                   <th>MRP</th>
                   <th>quantity</th>
                   <th>
                     base
                     Sell
                     Price
                     </th>
                   <th>taxRecv</th> 
                   <th>
                     final
                     Sell
                     Price
                    </th> 
                   <th>
                     base
                     Buy
                     Price
                     </th> 
                   <th>
                     final
                     Buy
                     Price</th> 
                   <th>HSN</th> 
                   <th>category</th>       
                 </tr>
                
            { items.length?
                   items.map(item=> <tr key={item._id}>
                       < td>{item.name}</ td>
                       <td>{item.code}</td>
                       < td>{item.MRP}</ td> 
                       <td>{item.quantity}</td> 
                       < td>{item.baseSellPrice}</ td>
                   <td>{item.taxRecv}</td>
                       <td>{item.finalSellPrice }</td>
                       <td>{item.baseBuyPrice}</td>
                       <td>{item.finalBuyPrice}</td>
                       <td>{item.HSN}</td>
                      <td>{item.category}</td>

                   </tr>):
                   null
               }
               </table>
               {/* </main> */}
               </div>
            </div>
           
        </Fragment>
    )
};

Items.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    item: state.item
  });
  
  export default connect(
    mapStateToProps,
    { getItems}
  )(Items);
  