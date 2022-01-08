import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input {...input} />
      <Box
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...checkbox}
        cursor='pointer'
        borderWidth='0.5px'
        borderRadius='lg'
        boxShadow='md'
        borderColor="transparent"
        _checked={{
          bg: 'white',
          color: 'blue.800',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        px={8}
        py={2}
        fontSize="md"
      >
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {props.children}
      </Box>
    </Box>
  )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function UnitSwitch() {
  const options = ['°C', '°F']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'unit',
    defaultValue: '°F',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}

export default UnitSwitch;