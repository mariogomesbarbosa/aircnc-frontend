import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

export default function Dashboard() {
	const [spots, setSpots] = useState([])

	useEffect(() => {
		async function loadSpots() {
			const user_id = localStorage.getItem('user')
			const response = await api.get('/dashboard', {
				headers: { user_id }
			})

			setSpots(response.data)
		}

		loadSpots()
	}, [])

	console.log(spots)

	return (

		<div className="container-dashboard">
			<div className="content">
				
				<div className="page-header">
					{!spots[0] ? (<strong>Você ainda não cadastrou Spots</strong>) : (<strong>Confira seus Spots</strong>) }
				</div>

				<ul className="spot-list">
					{spots.map(spot => (
						<li key={spot._id}>
							<header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
							<strong>{spot.company}</strong>
							<span>{spot.price ? `R$${spot.price}/dia` : `Gratuito` }</span>
						</li>
					))}
				</ul>

				<div className="page-footer">
					<Link className="btn-left" to="/">
						<button className="btn-secondary">Sair</button>
					</Link>
					<Link className="btn-right" to="/newspot">
						<button className="btn-primary">Incluir novo Spot</button>
					</Link>
				</div>	
			</div>
		</div>

	)
}