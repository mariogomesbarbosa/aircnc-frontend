import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

import camera from '../../assets/camera.svg'

export default function NewSpot( {history} ) {
	const [thumbnail, setThumbnail] = useState(null)
	const [company, setCompany] = useState('')
	const [techs, setTechs] = useState('')
	const [price, setPrice] = useState('')

	const preview = useMemo(() => {
		return thumbnail ? URL.createObjectURL(thumbnail) : null
	}, [thumbnail])
	
	async function handleSubmit(event) {
		event.preventDefault()

		const data = new FormData()
		const user_id = localStorage.getItem('user')

		data.append('thumbnail', thumbnail)
		data.append('company', company)
		data.append('techs', techs)
		data.append('price', price)
		
		await api.post('/spots', data, {
			headers: { user_id }
		})

		history.push('/dashboard')
	}

  return (

    <div className="container-newspot">
			<div className="content">
				<div className="page-header">
					<strong>Cadastre aquele spot incrível da empresa!</strong>
				</div>
				<form onSubmit={handleSubmit}>
					<label 
						id="thumbnail" 
						style={{ backgroundImage: `url(${preview})` }}
						className={thumbnail ? 'with-thumbnail' : ''}
					>
						<input type="file" onChange={event => setThumbnail(event.target.files[0])} />
						<img src={camera} alt="Selecione a foto do seu spot" />
						<span>Insira aquela foto do seu spot!</span>
					</label>

					<label htmlFor="company">Empresa *</label>
					<input 
						id="company"
						placeholder="Sua empresa"
						type="text"
						value={company}
						onChange={event => setCompany(event.target.value)}
					/>

					<label htmlFor="techs">Tecnologias * <span>(separadas por vírgula)</span></label>
					<input 
						id="techs"
						placeholder="Tecnologias utilizadas"
						type="text"
						value={techs}
						onChange={event => setTechs(event.target.value)}
					/>

					<label htmlFor="techs">Preço * <span>(em branco para Gratuito)</span></label>
					<input 
						id="price"
						placeholder="Valor da diária"
						type="number"
						value={price}
						onChange={event => setPrice(event.target.value)}
					/>

					<div className="page-footer">
						<Link className="btn-left" to="/dashboard">
							<button className="btn-secondary">Cancelar</button>
						</Link>

						<div className="btn-right">
							<button className="btn-primary" type="submit">Cadastrar</button>
						</div>
					</div>
				</form>
			</div>
    </div>

  )
}