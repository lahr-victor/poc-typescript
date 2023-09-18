function notFound(resource: string): Error {
  return {
    name: 'notFound',
    message: `${resource} could not be found!`,
  };
}

function unprocessable(resource: string[]): Error {
  return {
    name: 'unprocessable',
    message: `Could not be processed due to following content error: ${resource}!`,
  };
}

const applicationError = { notFound, unprocessable };
export default applicationError;
