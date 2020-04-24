import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

KegList.propTypes = {
  kegList: PropTypes.array
}

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
        <Keg 
          whenKegClicked = {props.onKegSelection}
          whenSellClicked = {props.onClickingBuy}
          whenRefillClicked = {props.onClickingRefill}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          ABV={keg.ABV}
          quantity={keg.quantity}
          key={keg.id} />
      )}
    </React.Fragment>
  );
}
KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onClickingRefill: PropTypes.func
};



export default KegList; 


