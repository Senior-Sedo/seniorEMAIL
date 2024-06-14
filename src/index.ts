const seniorEMAIL = (email: string): boolean => /^[A-Za-z]+([^A-Za-z0-9]?[A-Za-z0-9]+)*@[A-Za-z]+([.-]?[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/i.test(email);
export default seniorEMAIL;