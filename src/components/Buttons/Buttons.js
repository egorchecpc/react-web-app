import './Buttons.css'


const PrimaryButton = (props) => {
    return(
        <div className='button primary-button'>
           <span className='pri-btn'>{props.children}</span>
        </div>
    )
}

const PrimaryButtonStream = (props) => {
    return(
        <div className='button primary-button stream-btn'>
           <a href='/#'>{props.children}</a>
        </div>
    )
}

const PrimaryButtonCentered = (props) => {
    return(
        <div className='button primary-button primary-button-centered'>
           <span className='btn-pri-center'>{props.children}</span>
        </div>
    )
}

const PrimaryButtonProfileEdit= (props) => {
    return(
        <div className='button primary-button profile-edit'>
           <span className='pro-btn'>{props.children}</span>
        </div>
    )
}

const SecondaryButton = (props) => {
    return(
        <div className='button secondary-button'>
            <a href='/'>{props.children}</a>
        </div>
    )
}

const SecondaryButtonGL = (props) => {
    return(
        <div className='button secondary-button center-download-btn'>
            <span className='spanName'>{props.children}</span>
        </div>
    )
}

const SecondaryButtonProfile = (props) => {
    return(
        <div className='button secondary-button center-download-btn  profile-style-download'>
            <a href='/Profile'>{props.children}</a>
        </div>
    )
}


export default PrimaryButton
export {PrimaryButtonCentered}
export {PrimaryButtonProfileEdit}
export {PrimaryButtonStream}


export {SecondaryButton}
export {SecondaryButtonGL}
export {SecondaryButtonProfile}