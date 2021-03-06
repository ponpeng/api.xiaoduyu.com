import { createError } from 'apollo-errors';

export const FooError = createError('FooError', {
  message: 'A foo error has occurred'
});

// 更新错误
export const UpdateError = createError('updateError', {
  message: 'update error'
});

export const RejectedError = createError('rejectedError', {
  message: 'the request was rejected'
});


export default ({ message, data = {} }) => {
  let error = createError('error', {
    message
  })
  return new error(data)
}
