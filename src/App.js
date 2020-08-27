import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import AppShell from "./components/common/Appshell";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Todos from "./components/todo/index";
import AddTodo from "./components/todo/AddTodo";

const LoadingFallback = () => (
  <AppShell>
    <div className="p-4">Loading...</div>
  </AppShell>
);

const UnauthenticatedRoutes = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Switch>
      <Route exact path="/" component={Todos} />
      <Route path="/addTodo" component={AddTodo} />
      <Route component={PageNotFound} />
    </Switch>
  </Suspense>
);

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <Switch>
          <AppShell>
            <UnauthenticatedRoutes />
          </AppShell>         
        </Switch>
      </Suspense>
    </>
  );
};

function App() {
  return (
    <Router>
        <div className="container-fluid d-flex flex-column grow">
          <AppRoutes />
          <ToastContainer autoClose={3000} hideProgressBar />
        </div>
    </Router>
  );
}

export default App;
