import React, { useState } from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useGetters } from '../../store/getters/getters';
import { v4 } from 'uuid';
import { LocalizedText } from '../LocalizedText';
import { LocalizationDataKey } from '../../store/static/localization/types/LocalizationDataKey';
import { Button } from '../buttons/Button';
import { Task } from '../../store/state/task/types/Task';
import { addTask, editTask, removeAllCompletedTasks, removeAllTasks, removeTask, setTaskCompletion } from '../../store/state/task/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CheckButton } from '../buttons/CheckButton';
import { RemoveTaskConfirmationPopup } from '../popups/RemoveTaskConfirmationPopup';
import styles from './styles.scss';

export const TaskList: React.FC = () => {
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [removeTaskConfirmationPopupOpened, setRemoveTaskConfirmationPopupOpened] = useState(false);
  const state = useTypedSelector((state) => state);
  const { filteredTasks, getLocalizedText } = useGetters(state);
  const dispatch = useDispatch();

  const renderFilteredTasks = () => {
    return filteredTasks.map((filteredTask, index) => (
      <div key={index} className={classnames(styles['task-list-item'], { [styles['task-list-item_completed']]: filteredTask.completed })}>
        <CheckButton
          className={styles['change-task-completion-button']}
          title={getLocalizedText(
            filteredTask.completed
              ? LocalizationDataKey.TASK_LIST_CHANGE_TASK_COMPLETION_BUTTON_COMPLETED_STATE_TITLE
              : LocalizationDataKey.TASK_LIST_CHANGE_TASK_COMPLETION_BUTTON_UNCOMPLETED_STATE_TITLE
          )}
          checked={filteredTask.completed}
          onClick={() => dispatch(setTaskCompletion(filteredTask.id, !filteredTask.completed))}
        />
        <div className={styles['content']}>
          <div className={styles['content__title']}>{filteredTask.title}</div>
          <div className={styles['content__description']}>{filteredTask.description}</div>
        </div>
        <Button
          className={styles['edit-task-button']}
          title={getLocalizedText(LocalizationDataKey.TASK_LIST_EDIT_TASK_BUTTON_TITLE)}
          onClick={() =>
            dispatch(
              editTask({
                id: filteredTask.id,
                title: v4(),
                description: v4(),
                completed: filteredTask.completed
              })
            )
          }
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button
          className={styles['remove-task-button']}
          title={getLocalizedText(LocalizationDataKey.TASK_LIST_REMOVE_TASK_BUTTON_TITLE)}
          onClick={() => {
            setCurrentTask(filteredTask);
            setRemoveTaskConfirmationPopupOpened(true);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    ));
  };

  return (
    <div className={styles['task-list']}>
      <div className={classnames(styles['container'], styles['task-list__header'])}>
        <Button
          className={styles['add-task-button']}
          title={getLocalizedText(LocalizationDataKey.TASK_LIST_ADD_TASK_BUTTON_TITLE)}
          onClick={() =>
            dispatch(
              addTask({
                id: v4(),
                title: v4(),
                description: v4(),
                completed: false
              })
            )
          }
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className={styles['text']}>
            <LocalizedText dataKey={LocalizationDataKey.TASK_LIST_ADD_TASK_BUTTON_TEXT} />
          </span>
        </Button>
        <Button
          className={styles['remove-all-tasks-button']}
          title={getLocalizedText(LocalizationDataKey.TASK_LIST_REMOVE_ALL_TASKS_BUTTON_TITLE)}
          onClick={() =>
            confirm(getLocalizedText(LocalizationDataKey.TASK_LIST_REMOVE_ALL_TASKS_CONFIRMATION_POPUP_TEXT)) ? dispatch(removeAllTasks()) : null
          }
        >
          <FontAwesomeIcon icon={faTrash} />
          <span className={styles['text']}>
            <LocalizedText dataKey={LocalizationDataKey.TASK_LIST_REMOVE_ALL_TASKS_BUTTON_TEXT} />
          </span>
        </Button>
      </div>
      <div className={classnames(styles['container'], styles['task-list__items'])}>
        {filteredTasks.length ? (
          renderFilteredTasks()
        ) : (
          <div className={styles['empty-list-message']}>
            <LocalizedText dataKey={LocalizationDataKey.TASK_LIST_NO_TASKS} />
          </div>
        )}
      </div>
      <div className={classnames(styles['container'], styles['task-list__footer'])}>
        <div className={styles['total-counter']}>
          <span className={styles['total-counter__text']}>
            <LocalizedText dataKey={LocalizationDataKey.TASK_LIST_TOTAL_COUNTER} />
          </span>
          <span className={styles['total-counter__count']}>{filteredTasks.length}</span>
        </div>
        <Button
          className={styles['remove-all-completed-tasks-button']}
          title={getLocalizedText(LocalizationDataKey.TASK_LIST_REMOVE_ALL_COMPLETED_TASKS_BUTTON_TITLE)}
          onClick={() =>
            confirm(getLocalizedText(LocalizationDataKey.TASK_LIST_REMOVE_ALL_COMPLETED_TASKS_CONFIRMATION_POPUP_TEXT))
              ? dispatch(removeAllCompletedTasks())
              : null
          }
        >
          <FontAwesomeIcon icon={faCalendarCheck} />
          <span className={styles['text']}>
            <LocalizedText dataKey={LocalizationDataKey.TASK_LIST_REMOVE_ALL_COMPLETED_TASKS_BUTTON_TEXT} />
          </span>
        </Button>
      </div>
      {currentTask && (
        <RemoveTaskConfirmationPopup
          opened={removeTaskConfirmationPopupOpened}
          task={currentTask}
          onConfirm={(id) => {
            dispatch(removeTask(id));
            setCurrentTask(null);
            setRemoveTaskConfirmationPopupOpened(false);
          }}
          onCancel={() => {
            setCurrentTask(null);
            setRemoveTaskConfirmationPopupOpened(false);
          }}
        />
      )}
    </div>
  );
};
