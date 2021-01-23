// This is a Modal component, this is responsible for showing a pop-up to confirm to download the image
// It is using the props to populate the data coming from the parent component (Logic Component)
function Modal(props) {
  return (
    <div>
      <div className="modal fade" id={"downloadImageModal" + props.id} tabIndex="-1" role="dialog" aria-labelledby="downloadImageModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="downloadImageModalLabel">Confirm</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>To download image by {props.author} you will be redirected and leaving this page</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <a className="btn btn-primary" target="_blank" rel="noreferrer" role="button" href={props.download_url}>Download</a>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#downloadImageModal" + props.id}>
        Download image
      </button>
    </div>
  );
}

export default Modal;