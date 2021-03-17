import { login, register } from '../api';

const verifyEmailAndPassword = (email, password, setActiveBtn, setUser) => {
  const isEmailValid = email.match(/\S+@\S+\.\S+/);
  const isPasswordValid = password.match(/^[0-9a-zA-Z]{6,50}$/);

  if (isEmailValid && isPasswordValid) {
    setActiveBtn(true);
    setUser({ email, password });
  } else setActiveBtn(false);
};

const handleSubmit = (history, user) => {
  login(user)
    .then((response) => {
      const isAdmin = response.data.role === 'administrator';
      localStorage.setItem('token', response.data.token);

      if (isAdmin) history.push('admin/orders');
      else history.push('/products');
    });
};

const verifyRegister = (user, setActiveBtn) => {
  const isEmailValid = user.email.match(/\S+@\S+\.\S+/);
  const isPasswordValid = user.password.match(/^[0-9a-zA-Z]{6,50}$/);
  const isNameValid = user.name.match(/^[a-zA-Z]{12,50}$/);

  if (isEmailValid && isPasswordValid && isNameValid) {
    setActiveBtn(true);
  } else setActiveBtn(false);
};

const handleSubmitRegister = (user, checked, setUser, history) => {
  if (checked) {
    setUser({ ...user, role: 'administrator' });
    history.push('admin/orders');
    register({ ...user, role: 'administrator' });
  } else {
    setUser({ ...user, role: 'client' });
    history.push('products');
    register({ ...user, role: 'client' });
  }
};

const handleCheckbox = (checked, setChecked, setUser, user) => {
  if (checked) {
    setUser({ ...user, role: 'client' });
  } else setUser({ ...user, role: 'administrator' });
  setChecked(!checked);
};

export {
  verifyEmailAndPassword,
  handleSubmit,
  verifyRegister,
  handleCheckbox,
  handleSubmitRegister,
};
