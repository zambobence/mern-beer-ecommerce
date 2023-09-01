import { Select, Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function SelectComponent(props) {
    const name = props.name || props.label.toLowerCase()
    const optionArray = props.options.map(e => <option key={e} value={e}>{e}</option>)
    return (
        <Box>
            <Text margin={props.margin || '.75rem 0 .25rem'}>{props.label}</Text>
            <Select placeholder='Select option'
                name={name}
                value={props.value}
                defaultValue={props.defaultValue}
                borderColor={props.isInvalid && "red.300"}
                onChange={props.onChange}
           >
                {optionArray}
            </Select>
            {props.isInvalid && <Text color='red.300'>{props.errorMsg}</Text>}
        </Box>
    )
}