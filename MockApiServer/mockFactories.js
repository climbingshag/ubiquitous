import casual from 'casual'

const createTask = (vals = {}) => {
  const completed = vals.completed || casual.boolean;
  const completedAt = vals.completedAt || completed ? casual.unix_time : null;
  return {
    id: casual.uuid,
    createdAt: casual.unix_time,
    listId: casual.uuid,
    userId: casual.uuid,
    name: casual.word,
    completed,
    completedAt,
    ...vals,
  };
};

const createList = (vals = {}) => {
  const id = vals.id || casual.uuid;
  const userId = vals.userId || casual.uuid;
  const tasks =
    vals.tasks ||
    [...new Array(casual.integer(0, 7))].map(() =>
      createTask({ userId, listId: id })
    );
  return {
    id,
    userId,
    createdAt: casual.unix_time,
    name: casual.word,
    tasks,
    ...vals,
  };
};

const createUser = (vals = {}) => {
  const id = vals.id || casual.uuid;
  const lists =
    vals.lists ||
    [...new Array(casual.integer(0, 4))].map(() => createList({ userId: id }));
  return {
    id,
    createdAt: casual.unix_time,
    firstName: casual.first_name,
    lastName: casual.last_name,
    address: casual.address,
    phone: casual.phone,
    lists,
    ...vals,
  };
};
