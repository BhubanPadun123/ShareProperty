import {
    Audio,
    BallTriangle,
    Bars,
    Blocks,
    Circles,
    ColorRing,
    Comment,
    Discuss,
    DNA,
    Hourglass,
    InfinitySpin,
    Rings
} from "react-loader-spinner"
import PropTypes from 'prop-types';

export const DNALoader=(props)=>{
    const {
        visible,
        height,
        width,
        ariaLabel="dna-loading",
        wrapperStyle={},
        wrapperClass="dna-wrapper"
    } = props
    return(
        <DNA 
          visible={visible}
          height={height}
          width={width}
          ariaLabel={ariaLabel}
          wrapperClass={wrapperClass}
          wrapperStyle={wrapperStyle}
        />
    )
}
DNALoader.propTypes = {
    visible: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    ariaLabel: PropTypes.string,
    wrapperClass: PropTypes.string,
    wrapperStyle: PropTypes.object
}


export const HourglassLoader = (props) => {
    const {
        visible,
        height,
        width,
        ariaLabel = "hourglass-loading",
        wrapperStyle = {},
        wrapperClass = "",
        colors =['#306cce', '#72a1ed']
    } = props
    return (
        <Hourglass
           visible={visible}
           height={height}
           width={width}
           ariaLabel={ariaLabel}
           wrapperClass={wrapperClass}
           wrapperStyle={wrapperStyle}
           colors={colors}
        />
    )
}
HourglassLoader.propTypes = {
    visible: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    wrapperClass: PropTypes.string,
    colors: PropTypes.object.isRequired
}


export const InfinitySpinLoader = (props) => {
    const {
        visible,
        width,
        color,
        ariaLabel = "infinity-spin-loading"
    } = props
    return (
        <InfinitySpin
            visible={visible}
            width={width}
            color={color}
            ariaLabel={ariaLabel}
        />
    )
}
InfinitySpinLoader.propTypes = {
    visible: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export const RingsLoader = (props) => {
    const {
        visible,
        height,
        width,
        color,
        ariaLabel = "rings-loading",
        wrapperClass,
        wrapperStyle
    } = props
    return (
        <Rings
            visible={visible}
            height={height}
            width={width}
            color={color}
            ariaLabel={ariaLabel}
            wrapperClass={wrapperClass}
            wrapperStyle={wrapperStyle}
        />
    )
}

RingsLoader.propTypes = {
    visible: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    wrapperClass: PropTypes.string,
    wrapperStyle: PropTypes.object
}