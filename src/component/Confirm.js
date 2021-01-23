// This is a Confirm component, this is responsible for showing a checkbox floating at the bottom of the screen
// When checked, the pop-up confirmation does not appear on the screen when clicking the 'Download Image' button
// It is using the props to handle the click coming from the parent component (Logic Component)
function Confirm(props) {
  return (
    <div className="form-group form-check fixed-bottom bg-white mb-0 py-3 text-center border-top">
      <input type="checkbox" className="form-check-input" id="disablePopUp" onClick={props.disablePopUp}/>
      <label className="form-check-label" htmlFor="disablePopUp">Disable confirmation</label>
    </div>
  );
}

export default Confirm;
