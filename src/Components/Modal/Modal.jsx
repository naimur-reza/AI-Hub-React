import React from "react";

const Modal = (props) => {
  const {
    tool_name,
    description,
    image_link,
    integrations,
    features,
    input_output_examples,
  } = props.singleData;

  console.log(input_output_examples);
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card gap-2 flex-col-reverse lg:flex-row card-side bg-base-100  ">
            <div className="card-body   border-2 border-red-200 rounded-lg bg-red-50">
              <h2 className="card-title"></h2>
              <p className="text-xl font-semibold">
                {description ? description : "Not Found"}
              </p>
              <div className="card-actions justify-end">
                <label
                  htmlFor="my-modal-5"
                  className="btn btn-success font-semibold text-lg btn-circle rounded-full absolute -top-3 -right-3">
                  X
                </label>
              </div>

              {/* Main div */}
              <div className="flex justify-evenly flex-col lg:flex-row ">
                {/* integration */}
                <div>
                  <h1 className="text-xl py-5 font-bold">Integrations</h1>
                  <ol className="list-disc">
                    {integrations &&
                      integrations.map((integration) => (
                        <li>{integration ? integration : "Not Found"}</li>
                      ))}
                  </ol>
                </div>
                {/* Features */}
                <div>
                  <h1 className="text-xl font-bold py-5">Features</h1>
                  <ol className="list-disc">
                    {Object.values(features || {}).map((feature) => (
                      <li>{feature.feature_name}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className="border-2 border-red-200 rounded-lg  p-2">
              <figure>
                <img
                  className="w-full rounded-md"
                  src={image_link && image_link[0]}
                  alt="Album"
                />
              </figure>
              <div className="text-center mt-5 font-semibold">
                { input_output_examples &&
                <div>
                    <h1>{input_output_examples[0].input}</h1>
                    <h1 className="text-slate-600 font-normal py-3">{input_output_examples[0].output}</h1>
                    </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
