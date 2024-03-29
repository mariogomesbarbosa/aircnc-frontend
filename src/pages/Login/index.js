import React, { useState } from 'react'
import api from '../../services/api'

import './styles.css'

export default function Login({ history }) {

	const [email, setEmail] = useState('')

  async function handleSubmit(event){
    event.preventDefault()

    const response = await api.post('/sessions', { email })

    const { _id } = response.data

		localStorage.setItem('user', _id)
		
		history.push('/dashboard')
  }

	return (

		<div className="container-login">
			<div className="content">
				<p>
				Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
				</p>

				<form onSubmit={handleSubmit}>
					<label htmlFor="email">E-mail *</label>
					<input 
						id="email" 
						type="email" 
						placeholder="Insira seu email"
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
					
					<button className="btn-primary" type="submit">Entrar</button>
				</form>
			</div>	
		</div>
		
	)
}