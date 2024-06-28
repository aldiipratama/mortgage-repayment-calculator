import { useState } from "react";

const App = () => {
  const [onCalculated, setOnCalculated] = useState(false);

  return (
    <main className="flex justify-center items-center p-10 min-h-screen w-full bg-[#E3F4FC]">
      <div className="card lg:card-side bg-white lg:w-1/2">
        <div className="card-body lg:w-1/2">
          <div className="flex lg:justify-between flex-wrap">
            <div className="card-title text-slate-900 font-bold">
              Mortgage Calculator
            </div>
            <button className="btn btn-link text-slate-500 p-0">
              Clear All
            </button>
          </div>
          <form action="">
            <div>
              <div className="label">
                <span className="label-text text-slate-500">
                  Mortgage Amount
                </span>
              </div>
              <label className="input input-bordered flex items-center pl-0 bg-transparent gap-2">
                <details className="dropdown">
                  <summary className="btn rounded-none text-slate-500 border-none rounded-l-lg hover:bg-[#E3F4FC] bg-[#E3F4FC]">
                    $
                  </summary>
                  <ul className="menu dropdown-content z-10 bg-base-100 rounded-box w-52 p-2 shadow">
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </details>
                <input
                  type="number"
                  name="amount"
                  className="grow"
                  placeholder="Type Amount Here"
                />
              </label>
            </div>
            <div className="flex gap-4 max-lg:flex-col max-lg:mt-5 lg:items-center">
              <div>
                <div className="label">
                  <span className="label-text text-slate-500">
                    Mortgage Term
                  </span>
                </div>
                <label className="input input-bordered flex items-center pr-0 bg-transparent gap-2">
                  <input type="number" name="years" className="w-full" />
                  <span className="text-slate-500 bg-[#E3F4FC] p-3 rounded-r-lg">
                    years
                  </span>
                </label>
              </div>
              <div>
                <div className="label">
                  <span className="label-text text-slate-500">
                    Interest Rate
                  </span>
                </div>
                <label className="input input-bordered flex items-center pr-0 bg-transparent gap-2">
                  <input type="number" name="interest" className="w-full" />
                  <span className="text-slate-500 bg-[#E3F4FC] p-3 rounded-r-lg">
                    %
                  </span>
                </label>
              </div>
            </div>
            <div className="mt-5">
              <div className="label">
                <span className="label-text text-slate-500">Mortgage Type</span>
              </div>
              <label className="input input-bordered flex items-center">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio checked:radio-warning"
                  defaultChecked
                />
                <span className="ml-5 font-bold">Repayment</span>
              </label>
              <label className="input input-bordered flex  items-center mt-5">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio checked:radio-warning"
                />
                <span className="ml-5 font-bold ">Interest Only</span>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-warning mt-5 max-lg:w-full"
            >
              Calculate Repayments
            </button>
          </form>
        </div>
        <figure className="bg-[#133040] lg:w-1/2 p-5 max-lg:h-[70vh] lg:rounded-bl-[20%]">
          {!onCalculated ? (
            <div className="flex flex-col items-center justify-center">
              <img
                src="/illustration-empty.svg"
                alt="illustration-empty"
                className="w-40"
              />
              <p className="text-white font-bold text-xl text-center">
                Result Shown Here
              </p>
              <p className="text-center text-slate-400 mt-2">
                complete the form and click "calculate repayment" to see what
                your monthly repayments would be.
              </p>
            </div>
          ) : (
            <div className="flex flex-col lg:items-center justify-center">
              <p className="text-white font-bold text-xl text-center max-lg:text-start">
                Your Results
              </p>
              <p className="text-center max-lg:text-start text-slate-400 mt-2">
                Your results are shown below based on the information you
                provided. To adjust the results, edit form and click "calculate
                repayments" again.
              </p>
              <div className="p-5 text-slate-500 bg-slate-900  max-lg:w-full rounded-lg flex flex-col border-t-4 border-t-yellow-300 mt-5">
                <span>Your monthly repayments</span>
                <span className="text-yellow-300 font-bold mt-2">
                  $1.000.000
                </span>
                <span className="w-full border border-slate-500 my-5"></span>
                <span>Total you'll repay over the term</span>
                <span className="text-white font-bold mt-2">$1.000.000</span>
              </div>
            </div>
          )}
        </figure>
      </div>
    </main>
  );
};

export default App;
