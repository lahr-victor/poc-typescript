function unprocessable(resource: string[]): Error {
  return {
    name: 'unprocessable',
    message: `Could not be processed due to following content error: ${resource}!`,
  };
}

const applicationError = { unprocessable };
export default applicationError;
