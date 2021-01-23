// This is a Loader component, this is a presentational/dumb component for showing loading icon on screen
function Loader() {
  return (
    <div className="d-flex justify-content-center" data-loader>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
