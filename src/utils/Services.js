import request from 'superagent';

const dataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action)
  switch (action.type) {
    case 'GET_TODOS':
      /*
    In case we receive an action to send an API request, send the appropriate request
    */
      request.get('http://0.0.0.0:5000/todos').end((err, res) => {
        if (err) {
          /*
          in case there is any error, dispatch an action containing the error
          */
          return next({
            type: 'GET_TODOS_ERR',
            err
          })
        }
        const data = JSON.parse(res.text)
        console.log(data);
        /*
        Once data is received, dispatch an action telling the application
        that data was received successfully, along with the parsed data
        */
        next({
          type: 'GET_TODOS_SUCCESS',
          data
        })
      })
      break
    /*
  Do nothing if the action does not interest us
  */
    default:
      break
  }
}

export default dataService