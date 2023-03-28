/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import TrackLike from './like'
import { setupApiStore } from '../../test-utils'
import { musicApi } from '../../api/api'

const storeRef = setupApiStore(musicApi)

describe('<TrackLike />', () => {
  describe('Snapshots tests', () => {
    it('should render successfully and match snapshot', () => {
      const { container } = render(<TrackLike />, { wrapper: storeRef.wrapper })

      expect(container).toMatchSnapshot()
    })
  })
})
