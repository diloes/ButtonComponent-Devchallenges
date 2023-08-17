import PropTypes from 'prop-types'
export const ButtonTitle = ({ title }) => {
  return <p className='text-xs text-[#333] font-normal mb-2'>{title}</p>
}

ButtonTitle.propTypes = {
  title: PropTypes.string.isRequired
}
