import React, { useContext } from 'react'
import { CircleLoader } from 'react-spinners'
import LoadingContext from '../../contexts/LoadingContext'

function Spinner () {
  const { loadingCount } = useContext(LoadingContext)

  return (
    <>
      {loadingCount > 0 && (
        <div className="spinner-wrapper justify-content-around align-items-center">
          <CircleLoader
            sizeUnit={'em'}
            size={12}
            color={'#2196f3'}
          />
        </div>
      )}
    </>
  )
}

export default Spinner
