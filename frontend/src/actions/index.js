export const CLICK_ROLLOUT = 'CLICK_ROLLOUT';
export const RECEIVE_ROLLOUT_RESPONSE = 'RECEIVE_ROLLOUT_RESPONSE';
export const CLICK_SALIENCY = 'CLICK_SALIENCY';
export const CLICK_PREV_STEP = 'CLICK_PREV_STEP';
export const CLICK_NEXT_STEP = 'CLICK_NEXT_STEP';
export const HOVER_ON_STEP = 'HOVER_ON_STEP';

export const clickRollout = (stepCount) => ({
  type: CLICK_ROLLOUT,
  stepCount,
});

export const receiveRolloutResponse = (rolloutPath, isRolloutStarted) => ({
  type: RECEIVE_ROLLOUT_RESPONSE,
  rolloutPath,
  isRolloutStarted,
});

export const clickSaliency = (rolloutId, fromStep, toStep, actorIntensity, criticIntensity, qfuncIntensity) => ({
  type: CLICK_SALIENCY,
  rolloutId,
  fromStep,
  toStep,
  actorIntensity,
  criticIntensity,
  qfuncIntensity,
});

export const clickPrevStep = () => ({
  type: CLICK_PREV_STEP,
});

export const clickNextStep = () => ({
  type: CLICK_NEXT_STEP,
});

export const hoverOnStep = (step) => ({
  type: HOVER_ON_STEP,
  step,
});

export const CHANGE_PLOT_RANGE_LEFT = 'CHANGE_PLOT_RANGE_LEFT';
export const CHANGE_PLOT_RANGE_RIGHT = 'CHANGE_PLOT_RANGE_RIGHT';
export const CHANGE_ACTOR_INTENSITY = 'CHANGE_ACTOR_INTENSITY';
export const CHANGE_CRITIC_INTENSITY = 'CHANGE_CRITIC_INTENSITY';
export const CHANGE_QFUNC_INTENSITY = 'CHANGE_QFUNC_INTENSITY';
export const CHANGE_SALIENCY_RANGE_LEFT = 'CHANGE_SALIENCY_RANGE_LEFT';
export const CHANGE_SALIENCY_RANGE_RIGHT = 'CHANGE_SALIENCY_RANGE_RIGHT';
export const CHANGE_ROLLOUT_STEP = 'CHANGE_ROLLOUT_STEP';
export const CHANGE_DISPLAYED_CHART = 'CHANGE_DISPLAYED_CHART';

export const changePlotRangeLeft = (step) => ({
  type: CHANGE_PLOT_RANGE_LEFT,
  step,
});

export const changePlotRangeRight = (step) => ({
  type: CHANGE_PLOT_RANGE_RIGHT,
  step,
});

export const changeActorIntensity = (intensity) => ({
  type: CHANGE_ACTOR_INTENSITY,
  intensity,
});

export const changeCriticIntensity = (intensity) => ({
  type: CHANGE_CRITIC_INTENSITY,
  intensity,
});

export const changeQfuncIntensity = (intensity) => ({
  type: CHANGE_QFUNC_INTENSITY,
  intensity,
});

export const changeSaliencyRangeLeft = (step) => ({
  type: CHANGE_SALIENCY_RANGE_LEFT,
  step,
});

export const changeSaliencyRangeRight = (step) => ({
  type: CHANGE_SALIENCY_RANGE_RIGHT,
  step,
});

export const changeRolloutStep = (rolloutStep) => ({
  type: CHANGE_ROLLOUT_STEP,
  rolloutStep,
});

export const changeDisplayedChart = (chartName) => ({
  type: CHANGE_DISPLAYED_CHART,
  chartName,
});

export const START_FETCH_LOG = 'START_FETCH_LOG';
export const SUCCESS_FETCH_LOG = 'SUCCESS_FETCH_LOG';
export const START_FETCH_SERVER_STATE = 'START_FETCH_SERVER_STATE';
export const SUCCESS_FETCH_SERVER_STATE = 'SUCCESS_FETCH_SERVER_STATE';
export const START_FETCH_LATEST_LOG_INFO = 'START_FETCH_LATEST_LOG_INFO';
export const SUCCESS_FETCH_LATEST_LOG_INFO = 'SUCCESS_FETCH_LATEST_LOG_INFO';
export const START_FETCH_AGENT_PROFILE = 'START_FETCH_AGENT_PROFILE';
export const SUCCESS_FETCH_AGENT_PROFILE = 'SUCCESS_FETCH_AGENT_PROFILE';

export const startFetchLog = (rolloutId) => ({
  type: START_FETCH_LOG,
  rolloutId,
});

export const successFetchLog = (logDataRows, logLastUpdated) => ({
  type: SUCCESS_FETCH_LOG,
  logDataRows,
  logLastUpdated,
});

export const startFetchServerState = () => ({
  type: START_FETCH_SERVER_STATE,
});

export const successFetchServerState = (isJobRunning, isRolloutOnMemory) => ({
  type: SUCCESS_FETCH_SERVER_STATE,
  isJobRunning,
  isRolloutOnMemory,
});

export const startFetchLatestLogInfo = () => ({
  type: START_FETCH_LATEST_LOG_INFO,
});

export const successFetchLatestLogInfo = (rolloutPath) => ({
  type: SUCCESS_FETCH_LATEST_LOG_INFO,
  rolloutPath,
});

export const startFetchAgentProfile = () => ({
  type: START_FETCH_AGENT_PROFILE,
});

export const successFetchAgentProfile = (agentProfile) => ({
  type: SUCCESS_FETCH_AGENT_PROFILE,
  agentType: agentProfile.agentType,
  rawImageInput: agentProfile.rawImageInput,
  actionMeanings: agentProfile.actionMeanings,
  containsRecurrentModel: agentProfile.containsRecurrentModel,
  stateValueReturned: agentProfile.stateValueReturned,
  distributionType: agentProfile.distributionType,
  actionValueType: agentProfile.actionValueType,
});

export const TOGGLE_ACTION_DIMENSION_SELECT = 'TOGGLE_ACTION_DIMENSION_SELECT';

export const toggleActionDimensionSelect = (actionIdx) => ({
  type: TOGGLE_ACTION_DIMENSION_SELECT,
  actionIdx,
});
