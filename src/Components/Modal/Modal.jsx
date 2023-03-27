import React from "react";

const Modal = (props) => {
    const {tool_name , description ,image_link , integrations , features} = props.singleData;
    console.log();
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card flex-col-reverse lg:flex-row card-side bg-base-100 shadow-xl">

            <div className="card-body">
              <h2 className="card-title"></h2>
              <p className="text-xl font-semibold">{description? description : 'Not Found'}</p>
              <div className="card-actions justify-end">
              <label htmlFor="my-modal-5" className="btn">Yay!</label>
              </div>

              {/* Main div */}
              <div className="flex justify-evenly flex-col lg:flex-row">
                {/* integration */}
                <div>
                    <h1 className="text-xl py-5 font-bold">Integrations</h1>
                    <ol className="list-disc">
                    {
                        integrations?.map(integration => <li>{integration ? integration : 'Not Found'}</li>)
                    }
                    </ol>
                </div>
                {/* Features */}
                <div>
                    <h1 className="text-xl font-bold py-5">Features</h1>
                <ol className="list-disc">
                    {
                    Object.values(features || {}).map(feature => <li>{feature.feature_name}</li>)
                    }
                    </ol>
                </div>
              </div>
            </div>
            <figure>
              <img
                className="w-full"
                src={image_link && image_link[0]}
                alt="Album"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
