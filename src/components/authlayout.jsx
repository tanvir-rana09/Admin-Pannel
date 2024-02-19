import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Authlayout = ({ children, authentication }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { status } = useSelector(state => state.user)

	useEffect(() => {
		if (authentication && status !== authentication) {
			navigate('/signup')
		} else if (!authentication && status !== authentication) {
			navigate('/')
		}
	}, [authentication, status, navigate])
	return (
		<>{children}</>
	)
}

export default Authlayout