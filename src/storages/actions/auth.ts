import { AuthState } from '../../interfaces';
import { createUpdateAction, createClearAction } from '../../utils';

const ns = 'AUTH';
const updateAction = createUpdateAction<AuthState>(ns);
const clearAction = createClearAction(ns);

const authActions = {
  ...updateAction,
  ...clearAction,
};

export default authActions;
