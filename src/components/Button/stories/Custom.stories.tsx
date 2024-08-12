import { Button } from 'a-ui-cl'
import { makeStyles } from '@griffel/react'
import { tokens } from '../../../tokens';

const useClasses = makeStyles({
  root: {
    color: 'red',
    backgroundColor: 'blue',
    padding: '100px',
    border: `10px solid ${tokens.colorBrandBackground}`
  }
})

export const Custom = () => {
  const styles = useClasses()

  return (
    <div
      className={styles.root}
    >
      <Button
        primary
        label='Custom Button'
      >
      </Button>
    </div>
  )
};

export default {}
