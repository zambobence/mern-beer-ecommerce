import {Box, Input, InputGroup, Text, InputLeftElement} from '@chakra-ui/react'

const InputComponent = (props) => {
    const name = props.name || props.label.toLowerCase()

    return (
        <Box>
        <Text margin={props.margin || '.75rem 0 .25rem'}>{props.label}</Text>
        <Input
            type={props.type || 'text'}
            focusBorderColor={props.isInvalid && 'red.300'}
            isInvalid={props.isInvalid}
            errorBorderColor='red.300'
            name={name}
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            placeholder={props.placeholder}
            size='sm'
        />
        {props.isInvalid &&<Text color='red.300'>{props.errorMsg}</Text>}
    </Box>
    )
}

export default InputComponent
