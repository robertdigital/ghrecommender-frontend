import React from 'react'
import { storiesOf } from '@kadira/storybook'
import 'semantic-ui-css/semantic.min.css'

import RecommendationsList from './index'
import { recommendations } from '../../utils/fixtures'

const stories = storiesOf('Recommendations - List', module)
stories.add('<RecommendationsList />', () => <RecommendationsList items={recommendations} />)
