import React, { useState } from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useGetters } from '../../store/getters/getters';
import { LocalizedText } from '../LocalizedText';
import { LocalizationDataKey } from '../../store/static/localization/types/LocalizationDataKey';
import { Button } from '../buttons/Button';
import { Task } from '../../store/state/task/types/Task';
import { addTask, editTask, removeAllCompletedTasks, removeAllTasks, removeTask, setTaskCompletion } from '../../store/state/task/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CheckButton } from '../buttons/CheckButton';
import { AddTaskPopup } from '../popups/task/AddTaskPopup';
import { EditTaskPopup } from '../popups/task/EditTaskPopup';
import { RemoveTaskConfirmationPopup } from '../popups/task/RemoveTaskConfirmationPopup';
import { RemoveAllTasksConfirmationPopup } from '../popups/task/RemoveAllTasksConfirmationPopup';
import { RemoveAllCompletedTasksConfirmationPopup } from '../popups/task/RemoveAllCompletedTasksConfirmationPopup';
import styles from './styles.scss';

export const TaskList: React.FC = () => {
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [addTaskPopupOpened, setAddTaskPopupOpened] = useState(false);
  const [editTaskPopupOpened, setEditTaskPopupOpened] = useState(false);
  const [removeTaskConfirmationPopupOpened, setRemoveTaskConfirmationPopupOpened] = useState(false);
  const [removeAllTasksConfirmationPopupOpened, setRemoveAllTasksConfirmationPopupOpened] = useState(false);
  const [removeAllCompletedTasksConfirmationPopupOpened, setRemoveAllCompletedTasksConfirmationPopupOpened] = useState(false);
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
          onClick={() => {
            setCurrentTask(filteredTask);
            setEditTaskPopupOpened(true);
          }}
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
          onClick={() => setAddTaskPopupOpened(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className={styles['text']}>
            <LocalizedText dataKey={LocalizationDataKey.TASK_LIST_ADD_TASK_BUTTON_TEXT} />
          </span>
        </Button>
        <Button
          className={styles['remove-all-tasks-button']}
          title={getLocalizedText(LocalizationDataKey.TASK_LIST_REMOVE_ALL_TASKS_BUTTON_TITLE)}
          onClick={() => setRemoveAllTasksConfirmationPopupOpened(true)}
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
          onClick={() => setRemoveAllCompletedTasksConfirmationPopupOpened(true)}
        >
          <FontAwesomeIcon icon={faCalendarCheck} />
          <span className={styles['text']}>
            <LocalizedText dataKey={LocalizationDataKey.TASK_LIST_REMOVE_ALL_COMPLETED_TASKS_BUTTON_TEXT} />
          </span>
        </Button>
      </div>
      <AddTaskPopup
        opened={addTaskPopupOpened}
        onSave={(task) => {
          dispatch(addTask(task));
          setAddTaskPopupOpened(false);
        }}
        onCancel={() => setAddTaskPopupOpened(false)}
      />
      {currentTask && (
        <EditTaskPopup
          opened={editTaskPopupOpened}
          task={currentTask}
          onSave={(task) => {
            dispatch(editTask(task));
            setCurrentTask(null);
            setEditTaskPopupOpened(false);
          }}
          onCancel={() => {
            setCurrentTask(null);
            setEditTaskPopupOpened(false);
          }}
        />
      )}
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
      <RemoveAllTasksConfirmationPopup
        opened={removeAllTasksConfirmationPopupOpened}
        onConfirm={() => {
          dispatch(removeAllTasks());
          setRemoveAllTasksConfirmationPopupOpened(false);
        }}
        onCancel={() => setRemoveAllTasksConfirmationPopupOpened(false)}
      />
      <RemoveAllCompletedTasksConfirmationPopup
        opened={removeAllCompletedTasksConfirmationPopupOpened}
        onConfirm={() => {
          dispatch(removeAllCompletedTasks());
          setRemoveAllCompletedTasksConfirmationPopupOpened(false);
        }}
        onCancel={() => setRemoveAllCompletedTasksConfirmationPopupOpened(false)}
      />
    </div>
  );
};
