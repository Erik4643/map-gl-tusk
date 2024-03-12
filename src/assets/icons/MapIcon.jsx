import { COLORS } from 'styles/colors'

const MapIcon = ({ color = COLORS.gray }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      fill={color}
      d="M12 18l-6-2.1-4.65 1.8a.903.903 0 01-.925-.113A.988.988 0 010 16.75v-14c0-.217.063-.408.188-.575A1.13 1.13 0 01.7 1.8L6 0l6 2.1L16.65.3a.903.903 0 01.925.112.988.988 0 01.425.838v14a.933.933 0 01-.188.575 1.129 1.129 0 01-.512.375L12 18zm-1-2.45V3.85l-4-1.4v11.7l4 1.4z"
    />
  </svg>
)

export default MapIcon
