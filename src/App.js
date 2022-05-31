import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { selectLaunches, fetchLaunches } from "./features/launches/launchesSlice";

const App = () => {
  const dispatch = useDispatch()
  const { launches, loading, hasErrors} = useSelector(selectLaunches)

  useEffect(() => {
    dispatch(fetchLaunches())
  }, [dispatch])

  return (
    <div className="App">
      {launches}
    </div>
  );
}

export default App;
