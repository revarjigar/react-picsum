import { useEffect, useState } from 'react';
import Modal from "../Modal";
import Loader from "../Loader";
import Confirm from "../Confirm";

// Logic Component is where the API fetch is done
// Api returned items is the stored in the items state
// showModal is default set to true
function Logic() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [showModal, setModalValue] = useState(true);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(res => res.json())
      .then(
        (result) => {
          result = result.map(eachData => { // loop thru the data to add a new property
            eachData.display_url = `https://picsum.photos/id/${eachData.id}/500/500`;
            return eachData;
          });
          setIsLoaded(true); // set isLoaded state to true
          setItems(result); // set result as items in the state
        },
        (error) => { // error case scenario
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  // disablePopUp to disable the pop-up confirmation to download image
  function disablePopUp() {
    setModalValue(!showModal); // toggling value of showModal and setting it in the state
  }

  if (error) { // error case scenario
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader/>;
  } else {
    return (
      <div>
        <div className="container text-center">
          <ul className="list-unstyled pb-4">
            {items.map(item => (
              <li className="border px-3 py-3 my-3" key={item.id}>
              <img className="my-3 img-fluid" src={item.display_url} alt={item.author}/>
              <h2 className="text-wrap">{item.author}</h2>
              <p>{item.width}x{item.height}</p>
              {!showModal ? (
                <a className="btn btn-primary" role="button" href={item.download_url} target="_blank" rel="noreferrer">Download image</a>
                ) : (
                <Modal id={item.id} author={item.author} download_url={item.download_url}/>
              )}
              </li>
            ))}
          </ul>
        </div>
        <Confirm disablePopUp={disablePopUp}/>
      </div>
    );
  }
}

export default Logic;
