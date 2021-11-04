function connectDatabase() {
  const didConnect = database.connect(); // side-effect (expected)
  if (didConnect) {
    return true;
  } else {
    console.log('Could not connect to database!'); // side-effect (not expected)
    return false;
  }
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    console.log('Invalid input!'); // side-effect (not expected)
    return false;
  }
  return true;
}
