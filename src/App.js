import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./redux/slices/userSlice";
import { increment, decrement, incrementByAmount } from './redux/slices/counterSlice';

function UserComponent() {
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading);
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(userData);

  return (
    <div style={paddingContainer}>
      <div style={columnContainer}>
        <div>
          <h2>User Details</h2>
          {userData?.map((item) => (
            <div key={item.id}>
              <span>Name: {item.name}</span>
              <span> - </span>
              <span>Email: {item.email}</span>
            </div>
          ))}
        </div>
        <div>
          <h2>Counter</h2>
          <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
          <div>
            <input
              type="number"
              onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.value) || 0))}
              placeholder="Enter value"
            />
            <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const paddingContainer = {
  paddingLeft: '20%',
  paddingRight: '20%',
  paddingTop: '5%'
}

const columnContainer = {
  display: 'flex',
  justifyContent: 'space-between',
}

export default UserComponent;
