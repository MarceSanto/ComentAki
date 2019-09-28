import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const CreatUser = () => {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({ email: '', passwd: '' })
  const onChange = campo => evt => {
    setForm({
      ...form,
      [campo]: evt.target.value
    })
  }
  if (auth.user !== null) { return null } 
  return (
    <>
      {
        auth.createUser.createUserState.error !== '' && 
        <p>{auth.createUser.createUserState.error}</p>
      }
      <h3>Criar Nova Conta</h3>
      <input type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
      <input type='password' placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
      <button
        onClick={() =>
          auth.createUser.createUser(form.email, form.passwd)
        }>Criar conta</button>
    </>
  )
}

export default CreatUser